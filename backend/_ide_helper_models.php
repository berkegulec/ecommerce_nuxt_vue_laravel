<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Admins
 *
 * @property int $id
 * @property string $name
 * @property string $surname
 * @property string $email
 * @property string $password
 * @property string|null $phone
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|Admins newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admins newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admins query()
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereSurname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admins whereUpdatedAt($value)
 */
	class Admins extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Customers
 *
 * @property int $id
 * @property string $name
 * @property string $surname
 * @property string $email
 * @property string $password
 * @property string $phone
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|Customers newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customers newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Customers query()
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereSurname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Customers whereUpdatedAt($value)
 */
	class Customers extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

