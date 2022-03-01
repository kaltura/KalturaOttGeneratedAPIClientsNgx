
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAggregatedIngestInfoArgs  extends KalturaObjectBaseArgs {
    resultsCount? : number;
	totalFailureCount? : number;
	partialFailureCount? : number;
	warningsCount? : number;
}


export class KalturaAggregatedIngestInfo extends KalturaObjectBase {

    resultsCount : number;
	totalFailureCount : number;
	partialFailureCount : number;
	warningsCount : number;

    constructor(data? : KalturaAggregatedIngestInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAggregatedIngestInfo' },
				resultsCount : { type : 'n' },
				totalFailureCount : { type : 'n' },
				partialFailureCount : { type : 'n' },
				warningsCount : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAggregatedIngestInfo'] = KalturaAggregatedIngestInfo;