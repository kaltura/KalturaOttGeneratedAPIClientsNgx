
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaGeoBlockRuleFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaGeoBlockRuleFilter extends KalturaFilter {

    

    constructor(data? : KalturaGeoBlockRuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeoBlockRuleFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGeoBlockRuleFilter'] = KalturaGeoBlockRuleFilter;