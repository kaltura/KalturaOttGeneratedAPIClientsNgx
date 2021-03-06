
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRecordingFilterArgs  extends KalturaFilterArgs {
    statusIn? : string;
	externalRecordingIdIn? : string;
	kSql? : string;
}


export class KalturaRecordingFilter extends KalturaFilter {

    statusIn : string;
	externalRecordingIdIn : string;
	kSql : string;

    constructor(data? : KalturaRecordingFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecordingFilter' },
				statusIn : { type : 's' },
				externalRecordingIdIn : { type : 's' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRecordingFilter'] = KalturaRecordingFilter;