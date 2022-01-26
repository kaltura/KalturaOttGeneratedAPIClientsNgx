
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseChannelOrderArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseChannelOrder extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseChannelOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseChannelOrder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseChannelOrder'] = KalturaBaseChannelOrder;