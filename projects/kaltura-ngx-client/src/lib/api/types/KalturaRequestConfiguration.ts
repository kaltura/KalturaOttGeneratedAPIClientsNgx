
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaSkipCondition } from './KalturaSkipCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRequestConfigurationArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	userId? : number;
	language? : string;
	currency? : string;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
	abortAllOnError? : boolean;
	skipCondition? : KalturaSkipCondition;
}


export class KalturaRequestConfiguration extends KalturaObjectBase {

    partnerId : number;
	userId : number;
	language : string;
	currency : string;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;
	abortAllOnError : boolean;
	skipCondition : KalturaSkipCondition;

    constructor(data? : KalturaRequestConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRequestConfiguration' },
				partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				currency : { type : 's' },
				ks : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' },
				abortAllOnError : { type : 'b' },
				skipCondition : { type : 'o', subTypeConstructor : KalturaSkipCondition, subType : 'KalturaSkipCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRequestConfiguration'] = KalturaRequestConfiguration;