
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseSegmentActionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseSegmentAction extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSegmentAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseSegmentAction'] = KalturaBaseSegmentAction;