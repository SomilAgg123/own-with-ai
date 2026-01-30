# Own With AI - Pilot Trial Documentation

> This document captures decisions, context, and learnings from our pilot trial program. It is written to be agent-readable so future sessions can pick up context without re-explaining.

---

## Pilot Overview

### Client Context
- **Business**: Executive recruitment / headhunting agency
- **Owner**: Friend of founder, not technical but digitally savvy
- **Team**: Existing team members familiar with productivity tools (ChatGPT, Google Workspace) but not building automations
- **Current tools**: LinkedIn Recruiter, HR tech ATS (integrates with LinkedIn), Google Workspace, email + spreadsheets

### Business Workflow Stages
1. **Lead Generation** - Outreach to potential clients
2. **Client Nurture** - Follow-ups, keeping conversations warm
3. **Client Intake** - Discovery calls, role requirements, pricing (retainer + success fee)
4. **Candidate Sourcing** - Finding qualified candidates via LinkedIn, networks
5. **Candidate Vetting** - Screening, initial interviews, fit assessment
6. **Facilitation** - Coordinating interviews between candidates and clients
7. **Closing** - Offer negotiation, final facilitation
8. **Post-Placement** - Ensuring candidate retention for success fee

### Identified Bottlenecks
- **Client Intake** (Stage 3)
- **Candidate Sourcing** (Stage 4)

### Trainee Profile
- Existing team member (already knows the business)
- Digitally savvy but not building automations
- Goal: Learn to identify automation opportunities AND create agent-ready documentation

---

## Core Concept: Agent-Ready Operations

### The Problem We Solve
**Documentation Debt**: Businesses either don't have SOPs, or their SOPs are outdated. Writing new ones feels like overhead. This blocks AI/agent adoption because agents need explicit instructions to operate.

### Our Approach
Train EAs to create **agent-ready SOPs** as a byproduct of doing their work—not as a separate documentation task.

### The Process
1. EA does the process they normally do
2. We audit the process with a "prepared mind" for agent automation
3. Introduce no-code tools (Claude, Cowork, or similar) to automate parts of the SOP
4. EA learns which parts need human judgment vs. can be automated
5. End result: Working automation + documented SOP + trained EA with "the eye" for other processes

### Pilot Deliverables
1. **One process** documented as an agent-ready SOP
2. **Agent partially automating** that process (with EA in the loop at decision points)
3. **EA can articulate** the methodology to apply to other processes
4. **Measurement**: Time saved, quality maintained

---

## Key Decisions Made

### Decision 1: Narrow Scope
- **Decision**: Focus on ONE process for the pilot, not multiple
- **Rationale**: 4 weeks is tight; depth > breadth for proving the concept
- **Selected Process**: TBD (pending intake form completion) - likely Client Intake due to clearer structure

### Decision 2: "Documentation Debt" as Core Framing
- **Decision**: Use "documentation debt" as a key phrase in our positioning
- **Rationale**: It names the real blocker to AI adoption that most businesses face; resonates with technical and non-technical audiences

### Decision 3: Hands-On First, Repeatable Later
- **Decision**: For early pilots, we (Own With AI) will be heavily involved in creating agent-ready templates
- **Rationale**: We don't yet have a repeatable process; the pilot IS the process of discovering what works
- **Future state**: Once we have patterns, we can provide prompt templates that let EAs self-serve more

### Decision 4: Provide Prompt Templates
- **Decision**: Give EAs prompt templates so they don't need to know all best practices
- **Rationale**: The EA's job is to identify and translate business processes; we supply the "agent-ready" translation layer
- **Example**: EA describes a process → uses our prompt → gets agent-readable SOP draft

### Decision 5: Create Intake Form for Process Selection
- **Decision**: Build a question set that serves as intake for which process to pilot
- **Action**: Create questions, then add to website as accessible form
- **Purpose**: Systematize how we identify and document the process to transform

### Decision 6: Define "Agent-Ready SOP" Template
- **Decision**: Explicitly define what makes an SOP "agent-ready" vs just "documented"
- **Status**: Action item - iterate on template structure
- **Draft criteria**:
  - Explicit triggers (what kicks it off)
  - Clear inputs with formats
  - Numbered steps with decision points marked
  - Decision criteria (not "use judgment")
  - Defined outputs
  - Escalation triggers (when human intervenes)
  - Quality check criteria

---

## Process Intake Questions

The intake form is live at `/process-intake.html`. Here are the questions we ask to understand and document a process:

### Section 1: Process Overview
1. What is this process called? (name it)
2. In one sentence, what does this process accomplish?
3. How often does this process happen? (frequency)
4. Who currently does this process?
5. How long does it typically take (per instance)?

### Section 2: Process Details
6. What triggers this process to start?
7. What inputs are needed to do this process?
8. Walk through the steps from start to finish
9. What tools/systems do you use during this process?
10. What are the outputs / deliverables of this process?

### Section 3: Quality vs. Throughput
11. Is this process more about quality or quantity?
12. If "Both": Which parts require high-quality input vs. volume?
13. What information do you use to make decisions during this process?
14. Are there any rules or criteria you follow (even if informal)?
15. What could go wrong in this process? What errors have happened?

### Section 4: Pain Points
16. Where do you feel like you're wasting the most time?
17. Is there anything about this process that MUST stay manual / human-controlled?

### Section 5: Documentation Status
18. Is this process documented anywhere today?
19. If documentation exists, where is it?

---

## Action Items

### Immediate
- [x] Create process intake question set
- [x] Add intake form to website (process-intake.html)
- [ ] Define agent-ready SOP template structure
- [ ] Select specific process to pilot (after intake)

### During Pilot
- [ ] Document learnings weekly
- [ ] Capture what prompt templates are needed
- [ ] Note where EA struggles (curriculum gaps)
- [ ] Track time savings / quality metrics

### Post-Pilot
- [ ] Write up case study
- [ ] Refine curriculum based on learnings
- [ ] Create repeatable process for future pilots
- [ ] Update OPINIONS.md if positioning shifts

---

## Open Questions

1. **Tool selection**: Which tool for the pilot? Claude (via web), Claude Code, Cowork, or something else?
2. **Timeline**: Is 4 weeks realistic, or should we plan for 6?
3. **Success metrics**: How do we measure "quality maintained" beyond subjective assessment?
4. **Handoff**: After pilot, does EA continue using these methods independently or is there ongoing support?

---

## Terminology

| Term | Definition |
|------|------------|
| **Documentation Debt** | The gap between how a business actually operates and what's written down; blocks AI adoption |
| **Agent-Ready SOP** | A standard operating procedure written explicitly enough that an AI agent can execute it (with defined decision points for human input) |
| **Human-in-the-Loop** | Points in a process where human judgment is required; the EA's role in an automated workflow |
| **Prepared Mind** | Approaching work with awareness of automation opportunities; the mindset we train |

---

## Version History

| Date | Change | Author |
|------|--------|--------|
| 2025-01-29 | Initial creation with pilot context and decisions | Claude + Somil |
| 2025-01-29 | Added process intake questions; created process-intake.html form | Claude + Somil |

---

*This document should be updated as the pilot progresses and decisions are made.*
