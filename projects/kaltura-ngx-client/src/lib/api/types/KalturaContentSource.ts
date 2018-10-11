
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSegmentSource, KalturaSegmentSourceArgs } from './KalturaSegmentSource';

export interface KalturaContentSourceArgs  extends KalturaSegmentSourceArgs {
    field? : string;
}


export class KalturaContentSource extends KalturaSegmentSource {

    field : string;

    constructor(data? : KalturaContentSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentSource' },
				field : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContentSource'] = KalturaContentSource;