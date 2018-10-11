
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSocialNetworkComment, KalturaSocialNetworkCommentArgs } from './KalturaSocialNetworkComment';

export interface KalturaTwitterTwitArgs  extends KalturaSocialNetworkCommentArgs {
    
}


export class KalturaTwitterTwit extends KalturaSocialNetworkComment {

    

    constructor(data? : KalturaTwitterTwitArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTwitterTwit' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTwitterTwit'] = KalturaTwitterTwit;