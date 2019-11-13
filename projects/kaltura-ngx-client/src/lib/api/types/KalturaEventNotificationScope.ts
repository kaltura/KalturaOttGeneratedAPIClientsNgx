
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEventNotificationScopeArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEventNotificationScope extends KalturaObjectBase {

    

    constructor(data? : KalturaEventNotificationScopeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationScope' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventNotificationScope'] = KalturaEventNotificationScope;