
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserSessionProfileExpression, KalturaUserSessionProfileExpressionArgs } from './KalturaUserSessionProfileExpression';

export interface KalturaExpressionOrArgs  extends KalturaUserSessionProfileExpressionArgs {
    expressions? : KalturaUserSessionProfileExpression[];
}


export class KalturaExpressionOr extends KalturaUserSessionProfileExpression {

    expressions : KalturaUserSessionProfileExpression[];

    constructor(data? : KalturaExpressionOrArgs)
    {
        super(data);
        if (typeof this.expressions === 'undefined') this.expressions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExpressionOr' },
				expressions : { type : 'a', subTypeConstructor : KalturaUserSessionProfileExpression, subType : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExpressionOr'] = KalturaExpressionOr;