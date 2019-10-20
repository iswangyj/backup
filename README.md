# backup

## Started

This project will backup the database at 12 o'clock in the morning and evening every day.

## Options

1. db 

| Name | Type | Description |
| -- | -- | -- |
| host | String | The hostname of the database you are connecting to. |
| port | Number | The port number to connect to. |
| user | String | The MySQL user to authenticate as. |
| password | String | The password of that MySQL user. |
| database | String | Name of the database to use for this connection |

2. dump

| Name | Type | Description |
| -- | -- | -- |
| excludeTables | Boolean | If `true` the tables options as a blacklist. If `false` the table options as a whitelist. |
| tables | Array | The list of tables that you want to dump. Default to all tables. |

> If the `dump` options is null, we will back the entire database up.  

3. capacity: Capacity for backups (Default: 200)
