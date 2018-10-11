
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdUserFilterArgs  extends KalturaFilterArgs {
    householdIdEqual? : number;
}


export class KalturaHouseholdUserFilter extends KalturaFilter {

    householdIdEqual : number;

    constructor(data? : KalturaHouseholdUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdUserFilter' },
				householdIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdUserFilter'] = KalturaHouseholdUserFilter;