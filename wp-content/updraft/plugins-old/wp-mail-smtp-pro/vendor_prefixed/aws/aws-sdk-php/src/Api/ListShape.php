<?php

namespace WPMailSMTP\Vendor\Aws\Api;

/**
 * Represents a list shape.
 */
class ListShape extends \WPMailSMTP\Vendor\Aws\Api\Shape
{
    private $member;
    public function __construct(array $definition, \WPMailSMTP\Vendor\Aws\Api\ShapeMap $shapeMap)
    {
        $definition['type'] = 'list';
        parent::__construct($definition, $shapeMap);
    }
    /**
     * @return Shape
     * @throws \RuntimeException if no member is specified
     */
    public function getMember()
    {
        if (!$this->member) {
            if (!isset($this->definition['member'])) {
                throw new \RuntimeException('No member attribute specified');
            }
            $this->member = \WPMailSMTP\Vendor\Aws\Api\Shape::create($this->definition['member'], $this->shapeMap);
        }
        return $this->member;
    }
}
