
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentSourceArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSegmentSource extends KalturaObjectBase {

    

    constructor(data? : KalturaSegmentSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentSource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentSource'] = KalturaSegmentSource;