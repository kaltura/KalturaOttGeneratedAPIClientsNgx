
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPersonalFeedFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaPersonalFeedFilter extends KalturaFilter {

    

    constructor(data? : KalturaPersonalFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalFeedFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPersonalFeedFilter'] = KalturaPersonalFeedFilter;