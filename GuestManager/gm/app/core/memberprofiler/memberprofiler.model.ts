export class memberSearchList {
  public memberId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public mobilePhone: string;
  public joinDate:string;
  constructor(
    memberId: number,
    firstName: string,
    lastName: string,
    email: string,
    mobilePhone: string,
    joinDate:string

  ) {
    this.memberId = memberId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobilePhone = mobilePhone;
    this.joinDate=joinDate;
  }
}

export class countMap {
  public matchedMember: number;
  public totalMember: number;
  constructor(
    matchedMember: number,
    totalMember: number

  ) {
    this.matchedMember = matchedMember;
    this.totalMember = totalMember;
  }
}
  


export class memberProfiler {
  constructor(
    public memberSearchList: memberSearchList[],
    public countMap: countMap,

  ) { }
}

export class memberInfo {
  public fullName: string;
  public emailAddress: string;
  public mobileNumber: string;
  public joinDate: string;
  public ageInProgram: string;
  public zip: string;
  public acquisitionSource: string;
  public birthDate: string;
  public programName: string;

  public emailOptIn: string;
  public smsOptIn: string;
  public favoriteStore: string;
  public displayAddress1: string;
  public displayAddress2: string;

  public storeCity: string;
  public storeState: string;

  constructor(
    fullName: string,
    emailAddress: string,
    mobileNumber: string,
    joinDate: string,
    ageInProgram: string,
    zip: string,
    acquisitionSource: string,
    birthDate: string,
    programName: string,

    emailOptIn: string,
    smsOptIn: string,
    favoriteStore: string,
    displayAddress1: string,
    displayAddress2: string,

    storeCity: string,
    storeState: string,

  ) {
    this.fullName = fullName;
    this.emailAddress = emailAddress;
    this.mobileNumber = mobileNumber;
    this.joinDate = joinDate;
    this.ageInProgram = ageInProgram;
    this.zip = zip;
    this.acquisitionSource = acquisitionSource;
    this.birthDate = birthDate;
    this.programName = programName;
    this.emailOptIn = emailOptIn;
    this.smsOptIn = smsOptIn;
    this.favoriteStore = favoriteStore;
    this.displayAddress1 = displayAddress1;
    this.displayAddress2 = displayAddress2;
    this.storeCity = storeCity;
    this.storeState = storeState;
    


  }
}
  
  
  export class memberDemographicList {
    public memberId: number;
    public personaType: string;
    public gender: string;
    public ageRange: string;
    public homeOwnerShip: string;
    public maritalStatus: string;
    public primaryEthnicity: string;
    public education:string;
    public occupation: string;
    public children: string;
    public houseHoldIncome:string;
    constructor(
      memberId: number,
      personaType: string,
      gender: string,
      ageRange: string,
      homeOwnerShip: string,
      maritalStatus: string,
      primaryEthnicity: string,
      education:string,
      occupation: string,
      children: string,
      houseHoldIncome:string
  
    ) {
      this.memberId = memberId;
      this.personaType = personaType;
      this.gender = gender;
      this.ageRange = ageRange;
      this.homeOwnerShip = homeOwnerShip;

      this.maritalStatus = maritalStatus;
      this.primaryEthnicity = primaryEthnicity;
      this.education = education;
      this.occupation = occupation;

      this.children = children;
      this.houseHoldIncome = houseHoldIncome;

    }
  }


  export class memberPromotionList {
    public memberId: number;
    public promotionIssued: number;
    public promotionRedemmed: number;
    public promotionExpired: number;
    public promotionRejeted: number;
    public totalSales: string;
    public totalDiscount: string;
    public netSales: string;
    public averageCheckSize: string;
    public discountAverage: string;
    public discountPercentage: string;
    public lastSuccessfulRedemption: lastSuccessfulRedemption;
    public lastRejectedRedemption:string;
    constructor(
      memberId: number,
      promotionIssued: number,
      promotionRedemmed: number,
      promotionExpired: number,
      promotionRejeted: number,
       totalSales: string,
       totalDiscount: string,
       netSales: string,
       averageCheckSize: string,
       discountAverage: string,
       discountPercentage: string,
       lastSuccessfulRedemption: lastSuccessfulRedemption,
       lastRejectedRedemption:string
  
    ) {
      this.memberId = memberId;
      this.promotionIssued = promotionIssued;
      this.promotionRedemmed = promotionRedemmed;
      this.promotionExpired = promotionExpired;
      this.promotionRejeted = promotionRejeted;

      this.totalSales = totalSales;
      this.totalDiscount = totalDiscount;
      this.netSales = netSales;
      this.averageCheckSize = averageCheckSize;

      this.discountAverage = discountAverage;
      this.totalDiscount = totalDiscount;
      this.discountPercentage = discountPercentage;
      this.lastSuccessfulRedemption= lastSuccessfulRedemption;
      this.lastRejectedRedemption = lastRejectedRedemption;

    }
  }


  export class lastSuccessfulRedemption {
    public offerName: string;
    public date: string;
    public location: string;
    public reason: string;
    public amount: string;
    public discountAmount: string;
 
    constructor(
       offerName: string,
       date: string,
       location: string,
       reason: string,
       amount: string,
       discountAmount: string
   
  
    ) {
      this.offerName = offerName;
      this.date = date;
      this.location = location;
      this.reason = reason;
      this.amount = amount;

      this.discountAmount = discountAmount;
   
    }
  }







export class memberCampaignSummary {
  public subscriptionStatus: string;
  public statusChangeDate: string;
  public campaignsSent: number;
  public open: number;
  public firstEmailReceived: string;
  public lastEmailReceived: string;
  public lastEmailOpened: string;
  public lastEmailClicked:string;
  public openRate: string;
  public click: number;
  public clickRate:string;
  public redemption: number;
  public redemptionRate: number;
  public numberOfBouncedMail: number;

  constructor(
     subscriptionStatus: string,
     statusChangeDate: string,
     campaignsSent: number,
     open: number,
     firstEmailReceived: string,
     lastEmailReceived: string,
     lastEmailOpened: string,
     lastEmailClicked:string,
     openRate: string,
     click: number,
     clickRate:string,
     redemption: number,
     redemptionRate: number,
     numberOfBouncedMail: number,

  ) {
    this.subscriptionStatus = subscriptionStatus;
    this.statusChangeDate = statusChangeDate;
    this.campaignsSent = campaignsSent;
    this.open = open;
    this.firstEmailReceived = firstEmailReceived;

    this.lastEmailReceived = lastEmailReceived;
    this.lastEmailOpened = lastEmailOpened;
    this.lastEmailClicked = lastEmailClicked;
    this.openRate = openRate;

    this.click = click;
    this.clickRate = clickRate;

    this.redemption = redemption;
    this.redemptionRate = redemptionRate;

    this.numberOfBouncedMail = numberOfBouncedMail;
    

  }
}



export class memberSmsDetail {
  public memberId: number;
  public dateSent: string;
  public campaignName: string;
  public campaignType: string;

  constructor(
    memberId: number,
    dateSent: string,
    campaignName: string,
    campaignType: string,


  ) {
    this.memberId = memberId;
    this.dateSent = dateSent;
    this.campaignName = campaignName;
    this.campaignType = campaignType;

  }
}

export class memberSmsSummary {
  public memberId: number;
  public subscriptionStatus: string;
  public statusChangeDate: string;
  public smsSent: number;
  public firstSmsSent: string;
  public lastSmsSent:string;
  public firstCampaignName: string;
  public lastCampaignName:string;
  constructor(
    memberId: number,
    subscriptionStatus: string,
    statusChangeDate: string,
    smsSent: number,
    firstSmsSent: string,
    lastSmsSent:string,
    firstCampaignName: string,
    lastCampaignName:string

  ) {
    this.memberId = memberId;
    this.subscriptionStatus = subscriptionStatus;
    this.statusChangeDate = statusChangeDate;
    this.smsSent = smsSent;
    this.firstSmsSent = firstSmsSent;
    this.lastSmsSent=lastSmsSent;
    this.firstCampaignName = firstCampaignName;
    this.lastCampaignName=lastCampaignName;
  }
}