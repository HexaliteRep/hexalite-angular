export class Constants {

  public static SERVICE_TYPE = [{
    id: '1',
    name: 'Jumpstart',
    value: 'Jumpstart'
  },
  {
    id: '2',
    name: 'Repair on spot',
    value: 'Repair on spot'
  },
  {
    id: '3',
    name: 'Towing',
    value: 'Towing'
  },
  {
    id: '4',
    name: 'Accompany to repair',
    value: 'Accompany to repair'
  },
  {
    id: '5',
    name: 'Towing needed',
    value: 'Towing needed'
  }];

  public static EVENT_TYPE = [{
    id: '1',
    name: 'All',
    value: 'All'
  },
  {
    id: '2',
    name: 'Flat tyre',
    value: 'Flat tyre'
  },
  {
    id: '3',
    name: 'Flat Battery',
    value: 'Flat Battery'
  },
  {
    id: '4',
    name: 'No fuel',
    value: 'No fuel'
  },
  {
    id: '5',
    name: 'Wrong fuel',
    value: 'Wrong fuel'
  },
  {
    id: '6',
    name: 'Lockout',
    value: 'Lockout'
  },
  {
    id: '7',
    name: 'Breakdown',
    value: 'Breakdown'
  }];

  public static STATUS = [{
    _id: '1',
    name: 'Provider acceptance pending',
    value: 'Provider acceptance pending'
  },
  {
    _id: '2',
    name: 'Provider Timeout',
    value: 'Provider Timeout'
  }];

  public static MARKER_TYPE = [{
    _id: '1',
    name: 'Client',
    value: 'Client'
  },
  {
    _id: '2',
    name: 'Tow truck',
    value: 'Tow'
  },
  {
    _id: '3',
    name: 'Workshop',
    value: 'Workshop'
  }];

  public static DEFAULT_ZOOM = 11; // 15

  public static CONDITION = [{
    _id: '1',
    name: 'To Accept',
    value: 'To Accept'
  },
  {
    id: '2',
    name: 'To Dispatch',
    value: 'To Dispatch'
  },
  {
    _id: '3',
    name: 'To Monitor',
    value: 'To Monitor'
  }];
}
