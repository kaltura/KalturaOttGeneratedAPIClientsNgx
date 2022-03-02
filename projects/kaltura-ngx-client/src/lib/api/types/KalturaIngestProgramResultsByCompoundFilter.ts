
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIngestProgramResultsByRefineFilter, KalturaIngestProgramResultsByRefineFilterArgs } from './KalturaIngestProgramResultsByRefineFilter';

export interface KalturaIngestProgramResultsByCompoundFilterArgs  extends KalturaIngestProgramResultsByRefineFilterArgs {
    linearChannelIdIn? : string;
}


export class KalturaIngestProgramResultsByCompoundFilter extends KalturaIngestProgramResultsByRefineFilter {

    linearChannelIdIn : string;

    constructor(data? : KalturaIngestProgramResultsByCompoundFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestProgramResultsByCompoundFilter' },
				linearChannelIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIngestProgramResultsByCompoundFilter'] = KalturaIngestProgramResultsByCompoundFilter;