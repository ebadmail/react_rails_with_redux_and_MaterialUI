class PostsController < ApplicationController
  def show
    render component: 'Parent', props: { post: { id: params[:id], body: 'foo bar' ,footer: 'footer test'} }, prerender: true
  end
end
