
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEngagementFilterArgs  extends KalturaFilterArgs {
    typeIn? : string;
	sendTimeGreaterThanOrEqual? : number;
}


export class KalturaEngagementFilter extends KalturaFilter {

    typeIn : string;
	sendTimeGreaterThanOrEqual : number;

    constructor(data? : KalturaEngagementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEngagementFilter' },
				typeIn : { type : 's' },
				sendTimeGreaterThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEngagementFilter'] = KalturaEngagementFilter;