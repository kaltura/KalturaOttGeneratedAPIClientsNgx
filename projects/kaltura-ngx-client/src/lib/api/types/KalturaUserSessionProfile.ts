
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserSessionProfileExpression } from './KalturaUserSessionProfileExpression';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSessionProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	expression? : KalturaUserSessionProfileExpression;
}


export class KalturaUserSessionProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	expression : KalturaUserSessionProfileExpression;

    constructor(data? : KalturaUserSessionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSessionProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				expression : { type : 'o', subTypeConstructor : KalturaUserSessionProfileExpression, subType : 'KalturaUserSessionProfileExpression' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSessionProfile'] = KalturaUserSessionProfile;