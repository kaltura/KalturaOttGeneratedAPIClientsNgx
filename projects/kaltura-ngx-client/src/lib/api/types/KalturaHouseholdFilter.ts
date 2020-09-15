
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaHouseholdFilterArgs  extends KalturaFilterArgs {
    externalIdEqual? : string;
}


export class KalturaHouseholdFilter extends KalturaFilter {

    externalIdEqual : string;

    constructor(data? : KalturaHouseholdFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdFilter' },
				externalIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdFilter'] = KalturaHouseholdFilter;