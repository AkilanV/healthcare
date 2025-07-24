export interface Patient {
  id: string
  name: string
  patientId: string
  age: string
  dateOfBirth: string
  gender: string
  insuranceNumber: string
  avatar?: string
}

export interface HealthReading {
  id: string
  type: "temperature" | "blood_pressure" | "blood_sugar" | "weight"
  value: string
  unit: string
  date: string
  patientId: string
}

export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  condition: string
  date: string
  time: string
  status: "upcoming" | "completed" | "cancelled"
  type: string
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  avatar?: string
}

export interface Problem {
  id: string
  patientId: string
  condition: string
  date: string
  description?: string
  severity: "low" | "medium" | "high"
}

export interface Immunization {
  id: string
  patientId: string
  vaccine: string
  date: string
  dose: number
}

export interface Allergy {
  id: string
  patientId: string
  allergen: string
  severity: "mild" | "moderate" | "severe"
}
