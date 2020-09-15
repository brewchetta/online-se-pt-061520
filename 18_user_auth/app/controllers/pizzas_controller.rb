class PizzasController < ApplicationController

  get "/pizzas" do
    @pizzas = current_user.pizzas
    erb :"pizzas/index"
  end

  get "/pizzas/new" do
    redirect_if_logged_out
    @pizza = Pizza.new
    erb :"pizzas/new"
  end

  post "/pizzas" do
    redirect_if_logged_out
    @pizza = current_user.pizzas.build(params[:pizza])
    if @pizza.save
      redirect "/pizzas"
    else
      erb :"pizzas/new"
    end
  end

  get "/pizzas/:id/edit" do
    find_pizza
    erb :"pizzas/edit"
  end

  patch "/pizzas/:id" do
    find_pizza
    if @pizza.update(params[:pizza])
      redirect "/pizzas"
    else
      erb :"pizzas/edit"
    end
  end

  private

  def find_pizza
    @pizza = Pizza.find(params[:id])
    redirect "/pizzas" unless @pizza
  end

end
