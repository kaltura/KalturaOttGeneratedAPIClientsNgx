
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRecordingContextFilterArgs  extends KalturaFilterArgs {
    assetIdIn? : string;
}


export class KalturaRecordingContextFilter extends KalturaFilter {

    assetIdIn : string;

    constructor(data? : KalturaRecordingContextFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordingContextFilter' },
				assetIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRecordingContextFilter'] = KalturaRecordingContextFilter;