
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaHouseholdDeviceFamilyLimitations } from './KalturaHouseholdDeviceFamilyLimitations';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaHouseholdLimitationsArgs  extends KalturaObjectBaseArgs {
    name? : string;
	concurrentLimit? : number;
	deviceLimit? : number;
	deviceFrequency? : number;
	userFrequency? : number;
	usersLimit? : number;
	deviceFamiliesLimitations? : KalturaHouseholdDeviceFamilyLimitations[];
	description? : string;
	associatedDeviceFamiliesIdsIn? : string;
}


export class KalturaHouseholdLimitations extends KalturaObjectBase {

    readonly id : number;
	name : string;
	concurrentLimit : number;
	deviceLimit : number;
	deviceFrequency : number;
	readonly deviceFrequencyDescription : string;
	userFrequency : number;
	readonly userFrequencyDescription : string;
	readonly npvrQuotaInSeconds : number;
	usersLimit : number;
	deviceFamiliesLimitations : KalturaHouseholdDeviceFamilyLimitations[];
	description : string;
	associatedDeviceFamiliesIdsIn : string;

    constructor(data? : KalturaHouseholdLimitationsArgs)
    {
        super(data);
        if (typeof this.deviceFamiliesLimitations === 'undefined') this.deviceFamiliesLimitations = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdLimitations' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				concurrentLimit : { type : 'n' },
				deviceLimit : { type : 'n' },
				deviceFrequency : { type : 'n' },
				deviceFrequencyDescription : { type : 's', readOnly : true },
				userFrequency : { type : 'n' },
				userFrequencyDescription : { type : 's', readOnly : true },
				npvrQuotaInSeconds : { type : 'n', readOnly : true },
				usersLimit : { type : 'n' },
				deviceFamiliesLimitations : { type : 'a', subTypeConstructor : KalturaHouseholdDeviceFamilyLimitations, subType : 'KalturaHouseholdDeviceFamilyLimitations' },
				description : { type : 's' },
				associatedDeviceFamiliesIdsIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdLimitations'] = KalturaHouseholdLimitations;