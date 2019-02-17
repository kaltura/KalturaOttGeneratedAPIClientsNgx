
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSegmentValue, KalturaBaseSegmentValueArgs } from './KalturaBaseSegmentValue';

export interface KalturaSingleSegmentValueArgs  extends KalturaBaseSegmentValueArgs {
    
}


export class KalturaSingleSegmentValue extends KalturaBaseSegmentValue {

    readonly id : number;

    constructor(data? : KalturaSingleSegmentValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSingleSegmentValue' },
				id : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSingleSegmentValue'] = KalturaSingleSegmentValue;