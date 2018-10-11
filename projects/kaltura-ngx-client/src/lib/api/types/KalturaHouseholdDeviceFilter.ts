
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdDeviceFilterArgs  extends KalturaFilterArgs {
    householdIdEqual? : number;
	deviceFamilyIdIn? : string;
}


export class KalturaHouseholdDeviceFilter extends KalturaFilter {

    householdIdEqual : number;
	deviceFamilyIdIn : string;

    constructor(data? : KalturaHouseholdDeviceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdDeviceFilter' },
				householdIdEqual : { type : 'n' },
				deviceFamilyIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdDeviceFilter'] = KalturaHouseholdDeviceFilter;