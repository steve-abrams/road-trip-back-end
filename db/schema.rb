# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150920151343) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string  "name"
    t.integer "trip_id"
    t.string  "place_id"
    t.float   "lat"
    t.float   "lng"
  end

  create_table "events", force: :cascade do |t|
    t.string  "place_id"
    t.string  "name"
    t.integer "destination_id"
    t.integer "trip_id"
    t.string  "category"
  end

  create_table "posts", force: :cascade do |t|
    t.string  "title"
    t.date    "date"
    t.string  "content"
    t.integer "trip_id"
    t.integer "user_id"
    t.float   "latitude"
    t.float   "longitude"
  end

  create_table "trips", force: :cascade do |t|
    t.string   "name"
    t.string   "start_location"
    t.string   "end_location"
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.float    "start_location_lat"
    t.float    "start_location_lng"
    t.float    "end_location_lat"
    t.float    "end_location_lng"
    t.string   "start_place_id"
    t.string   "end_place_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.string   "hometown"
    t.string   "favorite_place"
    t.boolean  "show_city"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
