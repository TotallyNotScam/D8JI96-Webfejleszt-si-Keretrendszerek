

export interface DeviceRequest {
  id: string,
  identifier?: string[],
  status?: "draft" | "active" | "on-hold " | "revoked" | "completed" | "entered-in-error" | "unknown",
  intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
  priority?: "routine" | "urgent" | "asap" | "stat",
  subject: string,
  codeCodeableConcept: string,
  authoredOn?: string, //date
  note?: string,
  relevantHistory?: string,
  insurance?: string,
  occurrenceDateTime?: string

}


