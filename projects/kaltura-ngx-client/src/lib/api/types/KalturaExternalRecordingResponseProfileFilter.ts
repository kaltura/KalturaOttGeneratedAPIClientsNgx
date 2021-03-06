
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedObjectFilter, KalturaRelatedObjectFilterArgs } from './KalturaRelatedObjectFilter';

export interface KalturaExternalRecordingResponseProfileFilterArgs  extends KalturaRelatedObjectFilterArgs {
    
}


export class KalturaExternalRecordingResponseProfileFilter extends KalturaRelatedObjectFilter {

    

    constructor(data? : KalturaExternalRecordingResponseProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalRecordingResponseProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalRecordingResponseProfileFilter'] = KalturaExternalRecordingResponseProfileFilter;