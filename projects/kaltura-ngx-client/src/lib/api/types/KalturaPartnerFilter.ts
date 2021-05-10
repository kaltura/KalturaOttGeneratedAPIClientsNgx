
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPartnerFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaPartnerFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaPartnerFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPartnerFilter'] = KalturaPartnerFilter;