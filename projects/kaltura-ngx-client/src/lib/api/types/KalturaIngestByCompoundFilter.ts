
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaIngestByCompoundFilterArgs  extends KalturaFilterArgs {
    ingestNameContains? : string;
	ingestedByUserIdIn? : string;
	ingestStatusIn? : string;
	createdDateGreaterThan? : number;
	createdDateSmallerThan? : number;
}


export class KalturaIngestByCompoundFilter extends KalturaFilter {

    ingestNameContains : string;
	ingestedByUserIdIn : string;
	ingestStatusIn : string;
	createdDateGreaterThan : number;
	createdDateSmallerThan : number;

    constructor(data? : KalturaIngestByCompoundFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestByCompoundFilter' },
				ingestNameContains : { type : 's' },
				ingestedByUserIdIn : { type : 's' },
				ingestStatusIn : { type : 's' },
				createdDateGreaterThan : { type : 'n' },
				createdDateSmallerThan : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIngestByCompoundFilter'] = KalturaIngestByCompoundFilter;