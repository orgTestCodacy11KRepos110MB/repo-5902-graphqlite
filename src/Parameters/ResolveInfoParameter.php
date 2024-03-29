<?php

declare(strict_types=1);

namespace TheCodingMachine\GraphQLite\Parameters;

use GraphQL\Type\Definition\ResolveInfo;

/**
 * A parameter type-hinted to ResolveInfo
 */
class ResolveInfoParameter implements ParameterInterface
{
    /** @param array<string, mixed> $args */
    public function resolve(object|null $source, array $args, mixed $context, ResolveInfo $info): ResolveInfo
    {
        return $info;
    }
}
