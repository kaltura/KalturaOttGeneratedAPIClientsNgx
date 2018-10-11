
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaOTTUserFilterArgs  extends KalturaFilterArgs {
    usernameEqual? : string;
	externalIdEqual? : string;
	idIn? : string;
	roleIdsIn? : string;
}


export class KalturaOTTUserFilter extends KalturaFilter {

    usernameEqual : string;
	externalIdEqual : string;
	idIn : string;
	roleIdsIn : string;

    constructor(data? : KalturaOTTUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTUserFilter' },
				usernameEqual : { type : 's' },
				externalIdEqual : { type : 's' },
				idIn : { type : 's' },
				roleIdsIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaOTTUserFilter'] = KalturaOTTUserFilter;