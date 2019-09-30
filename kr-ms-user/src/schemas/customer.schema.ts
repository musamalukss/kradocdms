/**
 *	@description Default Imports
 */

import * as mongoose from 'mongoose';

/**
 *	@description Schema Configuration
 */

const individualDetails = new mongoose.Schema({
	Title: {
		type: String,
		default: '',
	},
	Type: {
		type: String,
		default: '',
	},
	FirstName: {
		type: String,
		default: '',
	},
	LastName: {
		type: String,
		default: '',
	},
	BirthDate: {
		type: String,
		default: '',
	},
	Gender: {
		type: String,
		default: '',
	},
	MaritalStatus: {
		type: String,
		default: '',
	},
	IDType: {
		type: String,
		default: '',
	},
	SaIdNumber: {
		type: String,
		default: '',
	},
	EmailAddress: {
		type: String,
		default: '',
	},
	CellphoneNumber: {
		type: String,
		default: '',
	},
	HomephoneNumber: {
		type: String,
		default: '',
	},
	PreferredCommunication: {
		Call: {
			type: String,
			default: '',
		},
	},
});

const addressDetails = new mongoose.Schema({
	POBoxNumber: {
		type: String,
		default: '',
	},
	PrivateBagNumber: {
		type: String,
		default: '',
	},
	C3DSiebelAddressType: {
		type: String,
		default: '',
	},
	BuildingName: {
		type: String,
		default: '',
	},
	AddressLine1: {
		type: String,
		default: '',
	},
	AddressLine2: {
		type: String,
		default: '',
	},
	StreetNumber: {
		type: String,
		default: '',
	},
	StreetName: {
		type: String,
		default: '',
	},
	Suburb: {
		type: String,
		default: '',
	},
	PostalCode: {
		type: String,
		default: '',
	},
	DeliveryAddressFlag: {
		type: String,
		default: '',
	},
	CityTown: {
		type: String,
		default: '',
	},
	Province: {
		type: String,
		default: '',
	},
	PeriodAtCurrentAddressYears: {
		type: String,
		default: '',
	},
	PeriodAtCurrentAddressMonths: {
		type: String,
		default: '',
	},
	PostalDeliveryFlag: {
		type: String,
		default: '',
	},
});

const employerDetails = new mongoose.Schema({
	POBoxNumber: {
		type: String,
		default: '',
	},
	PrivateBagNumber: {
		type: String,
		default: '',
	},
	C3DSiebelAddressType: {
		type: String,
		default: '',
	},
	BuildingName: {
		type: String,
		default: '',
	},
	AddressLine1: {
		type: String,
		default: '',
	},
	AddressLine2: {
		type: String,
		default: '',
	},
	StreetNumber: {
		type: String,
		default: '',
	},
	StreetName: {
		type: String,
		default: '',
	},
	Suburb: {
		type: String,
		default: '',
	},
	PostalCode: {
		type: String,
		default: '',
	},
	CityTown: {
		type: String,
		default: '',
	},
	Province: {
		type: String,
		default: '',
	},
	PeriodAtCurrentAddressYears: {
		type: String,
		default: '',
	},
	PeriodAtCurrentAddressMonths: {
		type: String,
		default: '',
	},
});

const bankAccountDetails = new mongoose.Schema({
	BillingProfileId: {
		type: String,
		default: '',
	},
	BankAccountName: {
		type: String,
		default: '',
	},
	BankAccountType: {
		type: String,
		default: '',
	},
	BankAccountNumber: {
		type: String,
		default: '',
	},
	BankBranch: {
		type: String,
		default: '',
	},
	BankName: {
		type: String,
		default: '',
	},
	BillFrequency: {
		type: String,
		default: '',
	},
	BillType: {
		type: String,
		default: '',
	},
	MediaType: {
		type: String,
		default: '',
	},
	BillingProfileName: {
		type: String,
		default: '',
	},
	PaymentMethod: {
		type: String,
		default: '',
	},
	PaymentType: {
		type: String,
		default: '',
	},
	BankBranchCode: {
		type: String,
		default: '',
	},
	BillFormat: {
		type: String,
		default: '',
	},
	AgeOfAccountYears: {
		type: String,
		default: '',
	},
	AgeOfAccountMonths: {
		type: String,
		default: '',
	},
	BankAccountStatus: {
		type: String,
		default: '',
	},
	C3DBankValidationFlag: {
		type: String,
		default: '',
	},
	DebitOrderCycle: {
		type: String,
		default: '',
	},
	EmailBillTo: {
		type: String,
		default: '',
	},
});

const ordersSchema = new mongoose.Schema({
	DealsheetNumber: {
		type: String,
		default: '',
	},
	ActivationType: {
		type: String,
		default: '',
	},
	Channel: {
		type: String,
		default: '',
	},
	QuoteNumber: {
		type: String,
		default: '',
	},
	OrderNumber: {
		type: String,
		default: '',
	},
	MSISDN: {
		type: String,
		default: '',
	},
	DealerID: {
		type: String,
		default: '',
	},
});

const CustomerSchema = new mongoose.Schema(
	{
		IndividualDetails: {
			type: Object,
			default: {},
			individualDetails,
		},
		AddressDetails: {
			type: Object,
			default: {},
			addressDetails,
		},
		EmployerDetails: {
			type: Object,
			default: {},
			employerDetails,
		},
		BankAccountDetails: {
			type: Object,
			default: {},
			bankAccountDetails,
		},
		AccountID: {
			type: String,
			default: '',
		},
		AccountNumber: {
			type: String,
			default: '',
		},
		ContactID: {
			type: String,
			default: '',
		},
		PrimaryAddressID: {
			type: String,
			default: '',
		},
		DeliveryAddressID: {
			type: String,
			default: '',
		},
		C3DBillingProfileId: {
			type: String,
			default: '',
		},
		C3DCreditVettingId: {
			type: String,
			default: '',
		},
		Orders: {
			type: Array,
			default: [],
			ordersSchema,
		},
		Status: {
			type: String,
			default: 'NIS', // IS = In Siebel && NIS = NotInSiebel
		},
		USER_ID: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (obj, ret) => {
				delete ret._id;
			},
		},
	},
);

export const Customer = mongoose.model('Customers', CustomerSchema);
