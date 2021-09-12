
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSessionProfileExpressionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaUserSessionProfileExpression extends KalturaObjectBase {

    

    constructor(data? : KalturaUserSessionProfileExpressionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSessionProfileExpression'] = KalturaUserSessionProfileExpression;