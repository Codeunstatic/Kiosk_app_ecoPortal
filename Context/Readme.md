Product Name

Visitor Kiosk System — Contractor Onboarding & Check-in

⸻

Overview

This is a tablet-based visitor management kiosk used at the entrance of a company location to manage:
	•	Visitors
	•	Contractors
	•	Safety compliance

The system replaces paper-based onboarding and sign-in processes with a digital, scalable solution.

⸻

Core Problem

Traditional contractor onboarding is paper-based and inefficient:
	•	Takes too long to complete
	•	Creates queues during peak arrival times
	•	Cannot track or enforce safety training effectively
	•	Does not scale across multiple locations

Digitising onboarding directly on a kiosk introduces a new issue:

👉 Queue bottlenecks

A single kiosk cannot handle long onboarding flows efficiently.

⸻

Core Product Idea

The system is designed to:

👉 Move heavy onboarding before arrival
👉 Keep kiosk interaction fast (seconds, not minutes)
👉 Only show users what they still need to complete

⸻

Key System Principle

The kiosk is not just a form.

It is a:

👉 Verification and routing system

It determines:
	•	Who the user is
	•	What they have already completed
	•	What they still need to do

⸻

User Types

1. Visitor
	•	One-time or occasional guest
	•	No onboarding required
	•	Quick check-in only

⸻

2. Contractor (New)
	•	First-time contractor
	•	Needs onboarding + safety training

⸻

3. Contractor (Existing, Training Complete)
	•	Has completed everything before
	•	Should check in instantly

⸻

4. Contractor (Existing, Training Incomplete)
	•	Has profile but hasn’t completed training
	•	Needs to complete training before entry

⸻

Core System Logic

When a user interacts with the kiosk, the system determines:
	1.	Is this user already registered?
	2.	Has this user completed safety training?

Based on this, the system routes them to the correct flow.

⸻

🔁 CORE FLOWS

1. Welcome Screen

Entry point of the system.

User sees:
	•	Scan QR Code (primary action)
	•	Check-in manually (secondary action)

⸻

2. QR Code Flow (Fast Path)

Used by returning contractors.

Flow:
Scan QR → System identifies user → Check training status → Success

Outcome:
	•	If training complete → instant check-in
	•	If not → route to training

Time: 3–5 seconds

⸻

3. Visitor Flow

Flow:
Select Visitor → Enter basic info → Confirm → Success

Data:
	•	Name
	•	Email
	•	Host

Time: 20–30 seconds

⸻

4. Contractor Flow (Manual Entry)

Entry via:
	•	Email input (fallback if no QR)

System checks:

Case A — Contractor exists + training complete

→ Skip everything → Success

Case B — Contractor exists + training incomplete

→ Go to training → Success

Case C — Contractor not found

→ Full onboarding flow

⸻

5. Contractor Onboarding Flow (New User)

Split into 3 steps to reduce cognitive load:

Step 1 — Company Details
	•	Company name
	•	Address
	•	Country (with type-to-search)

Step 2 — Personal Details
	•	Name
	•	Email
	•	Phone

Step 3 — Safety Training
	•	Safety notices
	•	Security acknowledgement

Then → Success

Time: 2–4 minutes

⸻

6. Training-Only Flow

For existing contractors who haven’t completed training.

Flow:
Open training → Accept → Success

Time: 1–2 minutes

⸻

7. Success Screen

Displayed after check-in.

Shows:
	•	Confirmation message
	•	Optional QR confirmation
	•	Auto-reset to welcome screen

⸻

⚡ SPEED OPTIMISATIONS (Important for your prototype logic)
	•	QR scan removes typing
	•	Type-to-search reduces input time
	•	Country → auto-suggest city
	•	Only required fields shown first
	•	Optional fields separated
	•	System skips completed steps

⸻

📱 PRE-ARRIVAL SYSTEM (Important context)

Before arriving:
	1.	Contractor is invited by a host
	2.	Receives onboarding link
	3.	Completes onboarding + training
	4.	Receives QR code via email

At arrival:
👉 They only scan → check-in instantly

⸻

🧠 DESIGN INTENT

This system is designed to:
	•	Reduce wait time at entry points
	•	Maintain 100% safety compliance
	•	Scale across multiple locations
	•	Support both technical and non-technical users
	•	Handle both pre-registered and walk-in users

⸻

📊 SUCCESS METRICS
	•	Check-in time under 30 seconds (visitors & returning contractors)
	•	Reduced kiosk queue length
	•	High pre-arrival onboarding completion rate
	•	100% safety training compliance
	•	Reduced data errors compared to paper

⸻

🧩 SYSTEM CHARACTERISTICS
	•	Works on tablet (1024 × 768)
	•	Touch-first interface
	•	Minimal typing required
	•	Clear, guided flow
	•	Fast reset after each user

⸻

🔑 ONE LINE SUMMARY (VERY IMPORTANT)

👉 The kiosk detects who the user is and only shows them what they still need to complete.

⸻

This is everything your prototype tool needs to:
	•	understand the product
	•	generate flows correctly
	•	simulate behavior properly
