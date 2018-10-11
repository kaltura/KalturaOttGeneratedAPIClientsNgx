
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFeed, KalturaFeedArgs } from './KalturaFeed';

export interface KalturaPersonalFeedArgs  extends KalturaFeedArgs {
    
}


export class KalturaPersonalFeed extends KalturaFeed {

    

    constructor(data? : KalturaPersonalFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalFeed' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPersonalFeed'] = KalturaPersonalFeed;