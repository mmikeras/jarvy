# Architecture

## Current objective

J.A.R.V.Y. is being built as a modular AI-agent system. The first implementation milestone is intentionally small: establish boundaries before adding complex agent behavior.

## Target boundaries

### 1. Presentation
Responsible for rendering the assistant experience and collecting user input.

Examples:
- chat interface
- voice controls
- assistant state visualization
- compact / tuck-away mode

Presentation should not directly own provider-specific AI logic.

### 2. Application / Agent Runtime
Responsible for turning user intent into an executable plan.

Responsibilities:
- conversation orchestration
- tool selection
- state transitions
- permission checks
- execution lifecycle

### 3. Domain
Contains concepts that should remain independent from specific frameworks or providers.

Examples:
- AgentState
- ToolDefinition
- ToolCall
- Permission
- Conversation
- ExecutionResult

### 4. Infrastructure
Adapters for external systems.

Examples:
- AI model providers
- browser automation
- operating-system integration
- filesystem
- databases
- telemetry

### 5. Observability
All important agent executions should eventually produce structured events such as:

```text
execution.started
agent.planning
permission.requested
tool.started
tool.completed
execution.completed
execution.failed
```

## Safety model

J.A.R.V.Y. should distinguish between informational operations and actions that affect external state.

### Low-risk
- answer a question
- summarize text
- inspect a page
- calculate a value

### Permission-sensitive
- send a message
- modify a file
- launch an application
- submit a form
- execute a destructive command

The agent should never silently escalate a low-risk request into a high-impact action.

## Evolution rule

Architecture should follow evidence. If a simpler design satisfies the requirements, keep it simple. Introduce queues, workers, event buses, microservices, or additional infrastructure only when a real requirement justifies the complexity.

## Portfolio goal

The repository should demonstrate engineering judgment, not merely technology count. Each major subsystem should document:

- why it exists
- why the implementation was chosen
- alternatives considered
- failure modes
- tests
- future improvements
