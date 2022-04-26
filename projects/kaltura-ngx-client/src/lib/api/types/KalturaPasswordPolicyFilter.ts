
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPasswordPolicyFilterArgs  extends KalturaFilterArgs {
    userRoleIdIn? : string;
}


export class KalturaPasswordPolicyFilter extends KalturaFilter {

    userRoleIdIn : string;

    constructor(data? : KalturaPasswordPolicyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPasswordPolicyFilter' },
				userRoleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPasswordPolicyFilter'] = KalturaPasswordPolicyFilter;