
export interface searchMemberRequest {
  searchKey: string;
  limit: number;
  offset: number;
}

export class countMap {
  matchedMember: number;
  totalMember: number;
}

export class memberSearchList {
  public memberId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public mobilePhone: string;
  constructor(
    memberId: number,
    firstName: string,
    lastName: string,
    email: string,
    mobilePhone: string

  ) {
    this.memberId = memberId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobilePhone = mobilePhone;
  }
}

export class memberProfiler {
  constructor(
    public memberSearchList: memberSearchList[],
    public countMap: countMap[],

  ) { }
}

