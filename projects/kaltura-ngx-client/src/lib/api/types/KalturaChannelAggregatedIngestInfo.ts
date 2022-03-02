
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAggregatedIngestInfo } from './KalturaAggregatedIngestInfo';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaChannelAggregatedIngestInfoArgs  extends KalturaObjectBaseArgs {
    linearChannelId? : number;
	aggregatedErrors? : KalturaAggregatedIngestInfo;
}


export class KalturaChannelAggregatedIngestInfo extends KalturaObjectBase {

    linearChannelId : number;
	aggregatedErrors : KalturaAggregatedIngestInfo;

    constructor(data? : KalturaChannelAggregatedIngestInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelAggregatedIngestInfo' },
				linearChannelId : { type : 'n' },
				aggregatedErrors : { type : 'o', subTypeConstructor : KalturaAggregatedIngestInfo, subType : 'KalturaAggregatedIngestInfo' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaChannelAggregatedIngestInfo'] = KalturaChannelAggregatedIngestInfo;