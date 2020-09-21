
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserRoleFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	currentUserRoleIdsContains? : boolean;
}


export class KalturaUserRoleFilter extends KalturaFilter {

    idIn : string;
	currentUserRoleIdsContains : boolean;

    constructor(data? : KalturaUserRoleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleFilter' },
				idIn : { type : 's' },
				currentUserRoleIdsContains : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserRoleFilter'] = KalturaUserRoleFilter;