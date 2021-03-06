
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSegmentArgs  extends KalturaObjectBaseArgs {
    segmentId? : number;
	userId? : string;
}


export class KalturaUserSegment extends KalturaObjectBase {

    segmentId : number;
	userId : string;

    constructor(data? : KalturaUserSegmentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSegment' },
				segmentId : { type : 'n' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSegment'] = KalturaUserSegment;