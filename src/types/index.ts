// Service Intelligence API types
export interface ServiceQueryRequest {
  query: string;
  vesselId?: string;
}

export interface SafetyWarning {
  level: "caution" | "warning" | "danger";
  message: string;
}

export interface Citation {
  source: string;
  section: string;
  page?: number;
}

export interface SpecRow {
  label: string;
  value: string;
  unit?: string;
}

export interface DiagramReference {
  type: "cooling" | "lubrication" | "electrical" | "fuel";
  label: string;
}

export interface ProcedureStep {
  step: number;
  instruction: string;
  warning?: string;
}

export interface PartInfo {
  partNumber: string;
  name: string;
  price: number;
  inStock: boolean;
  qty: number;
}

export interface ServiceContentBlock {
  type: "text" | "spec-table" | "procedure" | "diagram" | "parts" | "work-order-cta" | "service-checklist";
  text?: string;
  specs?: SpecRow[];
  steps?: ProcedureStep[];
  diagram?: DiagramReference;
  parts?: PartInfo[];
  checklist?: ServiceChecklistItem[];
}

export interface ServiceChecklistItem {
  item: string;
  interval: string;
  lastCompleted?: string;
  due: boolean;
}

export interface ServiceQueryResponse {
  safety?: SafetyWarning;
  citations: Citation[];
  content: ServiceContentBlock[];
}

// Owner Portal API types
export interface OwnerQueryRequest {
  query: string;
  vesselId?: string;
}

export interface OwnerAction {
  type: "schedule" | "call" | "order" | "dealer";
  label: string;
  /* Integration stub */
  endpoint?: string;
}

export interface OwnerQueryResponse {
  text: string;
  citation?: Citation;
  tip?: string;
  action?: OwnerAction;
}

// Telemetry types (Siren Marine shape)
export interface TelemetryData {
  engineHours: number;
  oilPressure: number;
  coolantTemp: number;
  batteryVoltage: number;
  fuelLevel: number;
  timestamp: string;
}

// Vessel types
export interface Engine {
  model: string;
  serial: string;
  year: number;
  hours: number;
}

export interface VesselData {
  id: string;
  name: string;
  builder: string;
  model: string;
  year: number;
  engines: Engine[];
  location: string;
  dealer: DealerInfo;
}

export interface DealerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
}

// Service History types
export interface ServiceRecord {
  date: string;
  hours: number;
  type: string;
  items: string[];
  cost: number;
  technician?: string;
}
