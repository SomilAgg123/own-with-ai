# Execution Trace: [Process Name]

> This document captures the agent's execution log for debugging, improvement, and human review.

---

## Run Metadata

| Field | Value |
|-------|-------|
| **Run ID** | [Unique identifier, e.g., PROC-20250129-001] |
| **Process** | [Link to SOP or process name] |
| **Started** | [Timestamp] |
| **Completed** | [Timestamp] |
| **Duration** | [Total time] |
| **Status** | ✅ Completed | ⚠️ Completed with escalations | ❌ Failed | ⏸️ Paused for human input |
| **Agent** | [Agent/tool identifier] |
| **Human Operator** | [Name of supervising human] |

---

## Input Snapshot

*Capture of all inputs at process start:*

```
[Paste or describe the actual inputs received]
```

**Input Validation**:
- [ ] All required inputs present
- [ ] Formats validated
- [ ] No obvious anomalies

---

## Step Log

### Step 1: [Step Name from SOP]

| Field | Value |
|-------|-------|
| **Timestamp** | [When executed] |
| **Action Taken** | [What the agent actually did] |
| **Tool/System Used** | [Actual tool interaction] |
| **Observation** | [What the agent observed/received] |
| **Confidence** | [X]% |
| **Outcome** | ✅ Success | ⚠️ Partial | ❌ Failed |

**Agent Reasoning** (if applicable):
> [Why the agent chose this action, especially at decision points]

---

### Step 2: [Step Name from SOP]

| Field | Value |
|-------|-------|
| **Timestamp** | [When executed] |
| **Action Taken** | [What the agent actually did] |
| **Tool/System Used** | [Actual tool interaction] |
| **Observation** | [What the agent observed/received] |
| **Confidence** | [X]% |
| **Outcome** | ✅ Success | ⚠️ Partial | ❌ Failed |

---

### Step 3: [Step Name from SOP] ⚠️ DECISION POINT

| Field | Value |
|-------|-------|
| **Timestamp** | [When executed] |
| **Action Taken** | [What the agent actually did] |
| **Tool/System Used** | [Actual tool interaction] |
| **Observation** | [What the agent observed/received] |
| **Confidence** | [X]% |
| **Outcome** | ✅ Success | ⚠️ Partial | ❌ Failed |

**Decision Analysis**:
| Condition Evaluated | Result | Confidence |
|---------------------|--------|------------|
| [Condition from SOP] | True/False | [X]% |
| [Alternative condition] | True/False | [X]% |

**Agent Reasoning**:
> [Detailed explanation of how the decision was made, what factors were weighed]

**Action Selected**: [Which branch was taken]

---

*[Continue for all steps...]*

---

## Escalations

| # | Step | Trigger | Escalated To | Resolution | Time to Resolve |
|---|------|---------|--------------|------------|-----------------|
| 1 | [Step #] | [Why escalated] | [Person] | [What they decided] | [Duration] |
| | | | | | |

---

## Anomalies & Notes

*Anything unexpected, edge cases encountered, or observations for future improvement:*

- [ ] **Anomaly**: [Description of something unexpected]
  - **Impact**: [How it affected execution]
  - **Recommendation**: [Suggested SOP update or handling]

- [ ] **Pattern Observed**: [Recurring situation worth noting]
  - **Frequency**: [How often this might occur]
  - **Recommendation**: [Should this become a documented decision point?]

---

## Output Summary

| Output | Produced | Delivered To | Verified |
|--------|----------|--------------|----------|
| [Expected output from SOP] | Yes/No/Partial | [Destination] | ✅/❌ |
| | | | |

**Final Output**:
```
[Summary or snapshot of what was produced]
```

---

## Self-Assessment

**Overall Confidence**: [X]%

**Quality Check Results**:
- [ ] [Check 1 from SOP]: Pass/Fail
- [ ] [Check 2 from SOP]: Pass/Fail
- [ ] [Check 3 from SOP]: Pass/Fail

**Process Adherence**: [Did the agent follow the SOP as written?]
- ✅ Fully adhered
- ⚠️ Deviated at step [X] because [reason]
- ❌ Significant deviation

**Improvement Suggestions**:
> [Agent's observations on how the SOP could be improved based on this run]

---

## Review Sign-Off

| Reviewer | Date | Status | Notes |
|----------|------|--------|-------|
| [Human reviewer] | [Date] | Approved / Needs revision | [Comments] |

---

*This trace should be retained for [retention period] for debugging and process improvement.*
