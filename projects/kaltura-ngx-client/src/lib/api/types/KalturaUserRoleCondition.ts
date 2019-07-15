
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUserRoleConditionArgs  extends KalturaConditionArgs {
    idIn? : string;
}


export class KalturaUserRoleCondition extends KalturaCondition {

    idIn : string;

    constructor(data? : KalturaUserRoleConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleCondition' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserRoleCondition'] = KalturaUserRoleCondition;