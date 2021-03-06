
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaInboxMessageFilterArgs  extends KalturaFilterArgs {
    typeIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
}


export class KalturaInboxMessageFilter extends KalturaFilter {

    typeIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;

    constructor(data? : KalturaInboxMessageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInboxMessageFilter' },
				typeIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'n' },
				createdAtLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaInboxMessageFilter'] = KalturaInboxMessageFilter;