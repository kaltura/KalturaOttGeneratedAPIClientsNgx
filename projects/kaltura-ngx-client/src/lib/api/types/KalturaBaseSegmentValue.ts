
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSegmentValueArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseSegmentValue extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseSegmentValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSegmentValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSegmentValue'] = KalturaBaseSegmentValue;