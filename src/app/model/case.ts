export  class Case  {
  constructor(
      public dispatchTime?: Date,
      public serviceType?: string,
      public eventType?: string,
      public licensePlate?: string,
      public eventLocation?: string,
      public vehicleModel?: string,
      public vehicleRegDate?: Date,
      public assignmentNo?: string,
      public product?: string,
      public status?: string,
      public condition?: string,
  ) { }
}
