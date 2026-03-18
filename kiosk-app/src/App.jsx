import { useState, useCallback } from 'react'
import './index.css'
import TabletFrame from './components/TabletFrame'
import FlowSwitcher from './components/FlowSwitcher'

// Screens
import FlowSelectorScreen from './screens/FlowSelectorScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SelectTypeScreen from './screens/SelectTypeScreen'

// Visitor
import VisitorDetailsScreen from './screens/visitor/VisitorDetailsScreen'
import VisitorSuccessScreen from './screens/visitor/VisitorSuccessScreen'

// Contractor
import EmailCheckScreen from './screens/contractor/EmailCheckScreen'
import ReturningCompleteScreen from './screens/contractor/ReturningCompleteScreen'
import SafetyTrainingScreen from './screens/contractor/SafetyTrainingScreen'
import ContractorSuccessScreen from './screens/contractor/ContractorSuccessScreen'

// New contractor onboarding
import Step1Company from './screens/contractor/onboarding/Step1Company'
import Step2Personal from './screens/contractor/onboarding/Step2Personal'
import Step3Safety from './screens/contractor/onboarding/Step3Safety'

const SCREENS = {
  FLOW_SELECTOR: 'flow_selector',
  WELCOME: 'welcome',
  SELECT_TYPE: 'select_type',

  // Visitor
  VISITOR_DETAILS: 'visitor_details',
  VISITOR_SUCCESS: 'visitor_success',

  // Contractor
  CONTRACTOR_EMAIL: 'contractor_email',
  RETURNING_COMPLETE: 'returning_complete',
  RETURNING_SAFETY: 'returning_safety',
  NEW_STEP1: 'new_step1',
  NEW_STEP2: 'new_step2',
  NEW_STEP3: 'new_step3',
  CONTRACTOR_SUCCESS: 'contractor_success',
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.FLOW_SELECTOR)
  const [data, setData] = useState({})
  const [activeFlowId, setActiveFlowId] = useState(null)

  const go = useCallback((s, extra = {}) => {
    setData(d => ({ ...d, ...extra }))
    setScreen(s)
  }, [])

  const reset = useCallback(() => {
    setData({})
    setScreen(SCREENS.FLOW_SELECTOR)
  }, [])

  const launchFlow = useCallback((flowId) => {
    setActiveFlowId(flowId)
    setData({})
    if (flowId === 'visitor') {
      setData({ flowId })
      setScreen(SCREENS.WELCOME)
    } else if (flowId === 'new_contractor') {
      setData({ flowId })
      setScreen(SCREENS.WELCOME)
    } else if (flowId === 'returning_complete') {
      setData({
        flowId,
        contractor: { name: 'John Pedro', email: 'john@example.com', company: 'Green Life Plumbers', phone: '+64 21 555 0001' }
      })
      setScreen(SCREENS.WELCOME)
    } else if (flowId === 'returning_incomplete') {
      setData({
        flowId,
        contractor: { name: 'Alex Taylor', email: 'incomplete@test.com', company: 'Pacific Electrical', phone: '+64 21 555 0003' }
      })
      setScreen(SCREENS.WELCOME)
    }
  }, [])

  function renderScreen() {
    // ── FLOW SELECTOR ──────────────────────────────────────────────────────
    if (screen === SCREENS.FLOW_SELECTOR) {
      return (
        <FlowSelectorScreen
          onLaunch={flowId => {
            setActiveFlowId(flowId)
            if (flowId === 'visitor') {
              go(SCREENS.WELCOME, { flowId })
            } else if (flowId === 'returning_complete') {
              go(SCREENS.WELCOME, {
                flowId,
                contractor: { name: 'John Pedro', email: 'john@example.com', company: 'Green Life Plumbers', phone: '+64 21 555 0001' }
              })
            } else if (flowId === 'returning_incomplete') {
              go(SCREENS.WELCOME, {
                flowId,
                contractor: { name: 'Alex Taylor', email: 'incomplete@test.com', company: 'Pacific Electrical', phone: '+64 21 555 0003' }
              })
            } else if (flowId === 'new_contractor') {
              go(SCREENS.WELCOME, { flowId })
            }
          }}
        />
      )
    }

    // ── WELCOME ────────────────────────────────────────────────────────────
    if (screen === SCREENS.WELCOME) {
      return (
        <WelcomeScreen
          onCheckin={() => go(SCREENS.SELECT_TYPE)}
          onCheckout={() => alert('Check-out flow — thank you!')}
          qrDisabled={data.flowId === 'new_contractor' || data.flowId === 'visitor'}
          onQrScan={
            data.flowId === 'returning_complete'
              ? () => go(SCREENS.RETURNING_COMPLETE, { contractor: data.contractor, backTo: SCREENS.WELCOME })
              : data.flowId === 'returning_incomplete'
              ? () => go(SCREENS.RETURNING_SAFETY, { contractor: data.contractor, backTo: SCREENS.WELCOME })
              : undefined
          }
        />
      )
    }

    // ── SELECT TYPE ────────────────────────────────────────────────────────
    if (screen === SCREENS.SELECT_TYPE) {
      return (
        <SelectTypeScreen
          onSelect={type => {
            if (type === 'visitor') go(SCREENS.VISITOR_DETAILS)
            else go(SCREENS.CONTRACTOR_EMAIL)
          }}
          onBack={() => go(SCREENS.WELCOME)}
        />
      )
    }

    // ── VISITOR DETAILS ────────────────────────────────────────────────────
    if (screen === SCREENS.VISITOR_DETAILS) {
      return (
        <VisitorDetailsScreen
          onSubmit={form => go(SCREENS.VISITOR_SUCCESS, { visitorForm: form })}
          onBack={() => go(SCREENS.SELECT_TYPE)}
        />
      )
    }

    // ── VISITOR SUCCESS ────────────────────────────────────────────────────
    if (screen === SCREENS.VISITOR_SUCCESS) {
      return <VisitorSuccessScreen onReset={reset} />
    }

    // ── CONTRACTOR EMAIL CHECK ─────────────────────────────────────────────
    if (screen === SCREENS.CONTRACTOR_EMAIL) {
      return (
        <EmailCheckScreen
          onResult={result => {
            // If we're inside a returning flow, always route to that flow's destination
            if (data.flowId === 'returning_complete') {
              go(SCREENS.RETURNING_COMPLETE, {
                contractor: result.contractor || data.contractor,
                backTo: SCREENS.CONTRACTOR_EMAIL,
              })
            } else if (data.flowId === 'returning_incomplete') {
              go(SCREENS.RETURNING_SAFETY, {
                contractor: result.contractor || data.contractor,
                backTo: SCREENS.CONTRACTOR_EMAIL,
              })
            } else if (result.type === 'returning_complete') {
              go(SCREENS.RETURNING_COMPLETE, { contractor: result.contractor, backTo: SCREENS.CONTRACTOR_EMAIL })
            } else if (result.type === 'returning_incomplete') {
              go(SCREENS.RETURNING_SAFETY, { contractor: result.contractor, backTo: SCREENS.CONTRACTOR_EMAIL })
            } else {
              go(SCREENS.NEW_STEP1, { email: result.email })
            }
          }}
          onBack={() => go(SCREENS.SELECT_TYPE)}
        />
      )
    }

    // ── RETURNING COMPLETE ─────────────────────────────────────────────────
    if (screen === SCREENS.RETURNING_COMPLETE) {
      return (
        <ReturningCompleteScreen
          contractor={data.contractor}
          onCheckin={() => go(SCREENS.VISITOR_SUCCESS)}
          onBack={() => go(data.backTo || SCREENS.CONTRACTOR_EMAIL)}
        />
      )
    }

    // ── RETURNING INCOMPLETE → SAFETY ──────────────────────────────────────
    if (screen === SCREENS.RETURNING_SAFETY) {
      return (
        <SafetyTrainingScreen
          contractor={data.contractor}
          isReturning={true}
          onComplete={() => go(SCREENS.CONTRACTOR_SUCCESS)}
          onBack={() => go(data.backTo || SCREENS.CONTRACTOR_EMAIL)}
        />
      )
    }

    // ── NEW CONTRACTOR STEP 1 ──────────────────────────────────────────────
    if (screen === SCREENS.NEW_STEP1) {
      return (
        <Step1Company
          email={data.email}
          onNext={form => go(SCREENS.NEW_STEP2, { companyData: form })}
          onBack={() => go(SCREENS.CONTRACTOR_EMAIL)}
        />
      )
    }

    // ── NEW CONTRACTOR STEP 2 ──────────────────────────────────────────────
    if (screen === SCREENS.NEW_STEP2) {
      return (
        <Step2Personal
          email={data.email}
          onNext={form => go(SCREENS.NEW_STEP3, { personalData: form })}
          onBack={() => go(SCREENS.NEW_STEP1)}
        />
      )
    }

    // ── NEW CONTRACTOR STEP 3 ──────────────────────────────────────────────
    if (screen === SCREENS.NEW_STEP3) {
      return (
        <Step3Safety
          onComplete={() => go(SCREENS.CONTRACTOR_SUCCESS, { isNew: true })}
          onBack={() => go(SCREENS.NEW_STEP2)}
        />
      )
    }

    // ── CONTRACTOR SUCCESS ─────────────────────────────────────────────────
    if (screen === SCREENS.CONTRACTOR_SUCCESS) {
      return <ContractorSuccessScreen onReset={reset} />
    }

    return null
  }

  return (
    <>
      <TabletFrame>{renderScreen()}</TabletFrame>
      {activeFlowId && (
        <FlowSwitcher activeFlowId={activeFlowId} onSwitch={launchFlow} />
      )}
    </>
  )
}
